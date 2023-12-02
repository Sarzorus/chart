
#Sets up current user as user.
sudo -u postgres createdb chart
sudo -u postgres psql chart
sudo -u postgres psql chart -f ./Server/postgresql/create_tables.sql
