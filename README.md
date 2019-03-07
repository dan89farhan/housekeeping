Git hub url: https://github.com/dan89farhan/housekeeping/blob/master/README.md

housekeeping

Respected Sir/Madam,

I create 2 different projects. one for APIs and other for android app.

For APIs i used Laravel php framework. For Android app i used React native.
# how to run the code.

Clone the project
Steps to run the laravel application to consume the APIs

prequisition:
PHP 7.1 and above 
composer(PHP dependency manager): latest 
mysql: latest version

    go to laravel code folder
    perform following commands
    1) composer install
    2) php artisan key:generate 
    3) edit the .env file to match the configuration

    # for e.g mysql port, db name, username and password

    4) php artisan co:cl
    5) php artisan ca:cl
    6) php artisan migrate:fresh

# make sure every table has been created successfully if something goes wrong then change the .env file and run the above command again.

# to run the web service

    7) php artisan serve


############# Android ####################
#Steps to run android app

prequisition: 
node : latest and stable version 
yarn: latest and stable version 
npm: latest and stable version 
react-native-cli: follow instruction on facebook page
laravel project is running

    1) go to react native code folder
    2) perform following commands 
    3) yarn install
    4) react-native link
    5) change API_URL to your local host url in react-native code/src/constant.js
    6) react-native run-android // for android
    7) react-native run-ios // for ios

Thank you very much
