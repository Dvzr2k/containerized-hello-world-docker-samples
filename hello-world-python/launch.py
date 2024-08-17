from flask import Flask
helloworld = Flask(__name__)
@helloworld.route("/")
def run():
    return "{\"message\":\"Hola Mundo desde Python V2\"}"
if __name__ == "__main__":
    helloworld.run(host="0.0.0.0", port=int("5001"), debug=True)