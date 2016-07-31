import os
import sys
from core.helpers import init_config, save_config, init_flask, register_blueprints


if __name__ == '__main__':
    # pass the main file's absolute path to init_config
    init_config(backend_path=os.path.dirname(os.path.abspath(__file__)))

    # Create Flask instance
    app = init_flask(secret_key='mysecret')

    # register flask blueprints
    register_blueprints(app)

    # save config
    save_config(app)

    #print('app: ', app.__dict__)

    # start server
    app.run(host='0.0.0.0', port=7000, debug=True)



else:
    sys.exit('This script should only be run as main')
