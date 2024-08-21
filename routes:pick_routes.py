from flask import Blueprint, request, jsonify
from app import db
from models import Pick, Game, User

pick_bp = Blueprint('pick', __name__)

@pick_bp.route('/', methods=['POST'])
def create_pick():
    data = request.get_json()
    user_id = data.get('user_id')
    game_id = data.get('game_id')
    pick = data.get('pick')

    if not User.query.get(user_id) or not Game.query.get(game_id):
        return jsonify({"message": "Invalid user or game ID"}), 400

    new_pick = Pick(user_id=user_id, game_id=game_id, pick=pick)
    
    db.session.add(new_pick)
    db.session.commit()

    return jsonify({"message": "Pick recorded successfully"}), 201
