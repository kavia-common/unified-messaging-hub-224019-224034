#!/bin/bash
cd /home/kavia/workspace/code-generation/unified-messaging-hub-224019-224034/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

