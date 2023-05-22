#!/bin/bash

start_time=$(date +%s)

# Run your build command here
npx vite build

end_time=$(date +%s)
total_time=$((end_time - start_time))

echo "Build completed in $total_time seconds."
