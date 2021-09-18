#!/bin/bash

if [ ! -d "node_modules" ]
then
  yarn install
fi
