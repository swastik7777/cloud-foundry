#!/bin/bash
envsubst '$PORT' < /home/vcap/app/nginx/conf/nginx.conf.template > /home/vcap/app/nginx/conf/nginx.conf
nginx -p /home/vcap/app/nginx -c /home/vcap/app/nginx/conf/nginx.conf



