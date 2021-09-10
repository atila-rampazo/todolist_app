FROM php:8.0.5
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo
WORKDIR /app
COPY ./composer*.json ./
COPY . ./
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8002

EXPOSE 8002
