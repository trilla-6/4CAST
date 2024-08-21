from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_home = db.Column(db.String(100), nullable=False)
    team_away = db.Column(db.String(100), nullable=False)
    game_date = db.Column(db.DateTime, nullable=False)
    result = db.Column(db.String(50))  # Example: 'home_win', 'away_win', 'tie'

    def __repr__(self):
        return f'<Game {self.team_home} vs {self.team_away}>'

class Pick(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=False)
    pick = db.Column(db.String(50))  # Example: 'home_win', 'away_win'

    user = db.relationship('User', backref=db.backref('picks', lazy=True))
    game = db.relationship('Game', backref=db.backref('picks', lazy=True))

    def __repr__(self):
        return f'<Pick User: {self.user_id}, Game: {self.game_id}, Pick: {self.pick}>'

class Standings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), nullable=False)
    wins = db.Column(db.Integer, default=0)
    losses = db.Column(db.Integer, default=0)
    ties = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f'<Standings Team: {self.team_name}>'
