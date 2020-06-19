#!/bin/bash
# Versioning to determine if node should be updated
NODE_VER=`node -v`
NPM_VER=`npm -v`

# Project info for when 
PROJ_CMD_INIT=`npm init`
PROJ_CMD_UPDATE=`npm upgrade`
PKG_JSON="package.json"
PKG_NAME=""
PKG_VER=""
DESC=""
ENTRY_POINT=""
TEST_CMD=""
GIT_REPO=""
KEYWORDS=""
AUTHOR=""
LICENSE=""

PKG_ARGS=( $PKG_NAME $PKG_VER $DESC $ENTRY_POINT $TEST_CMD $GIT_REPO $KEYWORDS $AUTHOR $LICENSE )

# Output versioning
echo "Node Version: $NODE_VER"
echo "npm Version: $NPM_VER"

# Check if there is a package.json file so we don't have to run "npm init" everytime
if [ ! -f $PKG_JSON ];
then
    $PROJ_CMD_INIT
else
    $PROJ_CMD_UPDATE
fi



