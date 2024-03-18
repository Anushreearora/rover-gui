import cv2
from flask import Flask, Response, jsonify
from flask_cors import CORS
import numpy as np
import random
import time

app = Flask(__name__)
CORS(app)


            
power_data = {
    "currentLoad": 50,
    "capacity": 100
}

comms_data = {
    "status": "Connected",
    "speed": "10 Mbps",
}

drivetrain_data = {
    "direction": "North",
    "gps": "37.7749, -122.4194",
    "imu": "0, 0, 0",
    "reference": "0, 0, 0",
    "speed": 10
}

motor_load_data = {
    "frLoad": 12.5,
    "flLoad": 12.7,
    "brLoad": 12.6,
    "blLoad": 12.5
}

joint_load_data = {
    "j0Load": 2,
    "j1Load": 1.5,
    "j2Load": 1.2,
    "j3Load": 1.3,
    "j4Load": 3,
    "eeLoad": 6
}

lab_load_data = {
    "x" : 2.2,
    "y" : 1.8,
    "z" : 2.0,
    "tray" : 4.3,
    "gripper" : 1,
}


@app.route('/power_data')
def get_power_data():
    return jsonify(power_data)

@app.route('/comms_data')
def get_comms_data():
    return jsonify(comms_data)

@app.route('/drivetrain_data')
def get_drivetrain_data():
    return jsonify(drivetrain_data)

@app.route('/motor_data')
def get_motor_data():
    return jsonify(motor_load_data)

@app.route('/joint_data')
def get_joint_data():
    return jsonify(joint_load_data)

@app.route('/lab_data')
def get_lab_data():
    return jsonify(lab_load_data)

@app.route('/image_feed1')
def image_feed1():
    # Open the video file
    video_path = 'vid.mov'
    video = cv2.VideoCapture(video_path)

    def generate_frames():
        while True:
            success, frame = video.read()
            if not success:
                break
            # Encoding the frame in JPEG format
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

'''

@app.route('/image_feed2')
def image_feed2():
    return Response(gen_frames(camera2), mimetype='multipart/x-mixed-replace; boundary=frame')
'''

if __name__ == "__main__":
    app.run(debug=True)
    
SyntaxWarning