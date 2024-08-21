from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes.user_routes import user_bp
from routes.game_routes import game_bp
from routes.pick_routes import pick_bp
from routes.standings_routes import standings_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///football_picks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

app.register_blueprint(user_bp, url_prefix='/api/users')
app.register_blueprint(game_bp, url_prefix='/api/games')
app.register_blueprint(pick_bp, url_prefix='/api/picks')
app.register_blueprint(standings_bp, url_prefix='/api/standings')

if __name__ == '__main__':
    db.create_all()  # Create database tables
    app.run(debug=True)
