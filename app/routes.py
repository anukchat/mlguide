from flask import Blueprint, render_template, send_from_directory, current_app
from flask_login import login_required, current_user
import os

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/protected')
@login_required
def protected():
    return render_template('protected.html', email=current_user.id)

@main_bp.route('/<path:filename>')
@login_required
def jupyter_book(filename):
    jupyter_book_dir = os.path.join(current_app.root_path, '..', '_build', 'html')
    return send_from_directory(jupyter_book_dir, filename)