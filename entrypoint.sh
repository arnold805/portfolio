#!/bin/bash
set -e

/bin/bash -l << SCRIPT
  echo "CD to project"
  cd /portfolio

  yarn build

  echo "Execute the container's main process"
  $@
SCRIPT
