## Setup
- You may choose to set up a Python virtual environment or install and run everything locally , however it'd be best to set up a [Python virtual environment](https://docs.python-guide.org/dev/virtualenvs/) so we can install all the dependencies and libraries pertaining to this particular project within the environment.

### Python Virtual Environment
1. `pip install virtualenv`.
2. Check if `virtualenv` has been installed with `virutalenv --version`.
3. Create a new directory for this virtual environment by running `virtualenv name_of_your_app`.
4. To activate the virtual environment, run `source name_of_your_app/bin/activate`.
5. Run `pip list` to see all the available dependencies installed.

> Inside of your newly created virtual environment project, `git pull` or `git clone` the **Django-React-TodoApp** repository.

### Client
1. `cd` into root project and then `client` folder.
2. Run `npm install` to install all libraries and dependencies.
3. Run `gulp sass` to compile all necessary `sass` files. The final `css` file will be compiled inside of `./assets/css/`.
4. The client project will run on `http://localhost:3000`.

### Server
1. Run `python manage.py runserver` command to run the wsgi server locally. This will run on `http://127.0.0.1:8000/todos/`.s

### Database
1. Install MySql
2. Login to your MySql with `mysql -u root -p`.
3. Create a database called **todolist**.
4. In the `settings.py` under **Databases**, fill in the **Name**, **User**, **Password**, and leave the **Host** and **Port** blank.
5. Run `python manage.py makemigrations` and `python manage.py migrate` to migrate database.
6. For checking, you can go `use todolist;` and `show tables;` in your MySql and you should see all available tables that have been migrated.

**MacOS - MySQL**
 - Install MySql with  Homebrew, `brew install mysql`.
 - Run `brew services start mysql`.
 - To check if what services are running, `brew services list`.
 - Install `pip install mysqlclient` for Python & MySql connection.

### Dependencies & Libraries

#### Django
1. Django  **1.10^**
2. django-cors-headers             **2.4^**
3. django-jsonify                  **0.3^**
4. djangorestframework             **3.9^**

#### React
1. [reactstrap](https://reactstrap.github.io/)
2. [gulp](https://www.npmjs.com/package/gulp)
