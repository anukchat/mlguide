from flask import Blueprint, redirect, url_for, current_app, request, session
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user
import logging
from authlib.integrations.flask_client import OAuth
from authlib.oauth2.rfc6749 import OAuth2Token
import secrets

auth_bp = Blueprint('auth', __name__)

class User(UserMixin):
    def __init__(self, id):
        self.id = id

@auth_bp.route('/login')
def login():
    oauth = current_app.extensions['authlib.integrations.flask_client']
    redirect_uri = url_for('auth.authorize', _external=True)
    
    # Generate and store a nonce
    nonce = secrets.token_urlsafe(16)
    session['oauth_nonce'] = nonce
    
    logging.info(f"Initiating login. Redirect URI: {redirect_uri}, Nonce: {nonce}")
    return oauth.google.authorize_redirect(redirect_uri, nonce=nonce)

@auth_bp.route('/authorize')
def authorize():
    oauth = current_app.extensions['authlib.integrations.flask_client']
    try:
        logging.info(f"Authorization callback received. Query string: {request.query_string}")
        token = oauth.google.authorize_access_token()
        logging.info("Access token obtained successfully")
        
        # Retrieve the nonce from the session
        nonce = session.pop('oauth_nonce', None)
        if not nonce:
            raise ValueError("Nonce not found in session")
        
        # Parse the ID token with the nonce
        user_info = oauth.google.parse_id_token(token, nonce=nonce)
        logging.info(f"User info obtained: {user_info}")
        
        user = User(user_info['email'])
        login_user(user)
        logging.info(f"User {user_info['email']} logged in successfully")
        return redirect(url_for('main.protected'))
    except Exception as e:
        logging.error(f"Error during authorization: {str(e)}", exc_info=True)
        return f"An error occurred: {str(e)}", 400

@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))