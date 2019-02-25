#!/bin/bash
set -e

yarn db:create || true
yarn db:migrate

exec "$@"