release: python manage.py makemigrations
release : python manage.py migrate

web: gunicorn cinema_project.wsgi --log-file=-