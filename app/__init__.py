from flask import Flask
from flask_login import LoginManager
from authlib.integrations.flask_client import OAuth
from .auth import auth_bp
from .routes import main_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    oauth = OAuth(app)
    oauth.register(
        name='google',
        client_id=app.config['GOOGLE_CLIENT_ID'],
        client_secret=app.config['GOOGLE_CLIENT_SECRET'],
        server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
        client_kwargs={
            'scope': 'openid email profile',
            'prompt': 'select_account'
        }
    )

    app.register_blueprint(auth_bp)
    app.register_blueprint(main_bp)

    @login_manager.user_loader
    def load_user(user_id):
        from .auth import User
        return User(user_id)

    return app