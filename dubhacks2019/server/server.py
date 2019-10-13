from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
# app.config['SECRET_KEY' ='some value']
app.config['CORS_HEADERS'] = 'Content-Type'
# cors = CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)



testVar = "Please print this"
@app.route('/zoo', methods = ["GET", "POST"])
# @cross_origin()
# @crossdomain(origin='*')
def testPrinter():
    testVar = {
        "users": 
            { 'name': 'Anne', 'age': 3 }
        
    }
    return testVar

@app.route('/urls', methods = ["GET", "POST"])
def testingGet():
    tester = request.args.get('tester')
    print("HERE:   "+ tester)
    return tester


@app.route('/')
# @cross_origin()
# @crossdomain(origin='*')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()