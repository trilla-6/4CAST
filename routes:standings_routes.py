from flask import Blueprint, request, jsonify
from app import db
from models import Standings

standings_bp = Blueprint('standings', __name__)

@standings_bp.route('/', methods=['GET'])
def get_standings():
    standings = Standings.query.all()
    return jsonify([{
        'id': standings.id,
        'team_name': standings.team_name,
        'wins': standings.wins,
        'losses': standings.losses,
        'ties': standings.ties
    } for standings in standings])
