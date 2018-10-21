### Setup

- Run `python manage.py runserver` command to run the wsgi server locally.

MacOS

 MySQL
 -  Install MySql with  Homebrew, `brew install mysql`.
 -  Run `brew services start mysql`.

To check if what services are running, `brew services list`.

Install `pip install mysqlclient` for Python & MySql connection.

Database
1. Install MySql
2. Login to your MySql with `mysql -u root -p`.
3. Create a database called **todolist**.
4. In the `settings.py` under **Databases**, fill in the **Name**, **User**, **Password**, and leave the **Host** and **Port** blank.
5. Run `python manage.py migrate` to migrate.
6. For checking, you can go `use todolist;` and `show tables;` in your MySql and you should see all available tables that have been mirgrated. 
