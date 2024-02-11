import cv2
from flask import Flask, Response, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)
camera1 = cv2.VideoCapture(0)
camera2 = cv2.VideoCapture(1)

def resize_frame(frame, width=None, height=None):
    if width is None and height is None:
        return frame
    if width is None:
        r = height / frame.shape[0]
        dim = (int(frame.shape[1] * r), height)
    else:
        r = width / frame.shape[1]
        dim = (width, int(frame.shape[0] * r))
    resized_frame = cv2.resize(frame, dim, interpolation=cv2.INTER_AREA)
    return resized_frame

def gen_frames(camera):
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            resized_frame = resize_frame(frame, width=640)  # Resize frame to desired width (e.g., 640 pixels)
            ret, buffer = cv2.imencode('.jpg', resized_frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')
            
power_data = {
    "currentLoad": 50,
    "capacity": 100
}

comms_data = {
    "status": "Connected",
    "speed": "High"
}

drivetrain_data = {
    "direction": "North",
    "gps": "37.7749, -122.4194",
    "imu": "0, 0, 0",
    "reference": "0, 0, 0",
    "speed": 10
}

# Endpoint to serve power data
@app.route('/power_data')
def get_power_data():
    return jsonify(power_data)

# Endpoint to serve comms data
@app.route('/comms_data')
def get_comms_data():
    return jsonify(comms_data)

# Endpoint to serve drivetrain data
@app.route('/drivetrain_data')
def get_drivetrain_data():
    return jsonify(drivetrain_data)

@app.route('/image_feed1')
def image_feed1():
    return Response(gen_frames(camera1), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/image_feed2')
def image_feed2():
    return Response(gen_frames(camera2), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)
