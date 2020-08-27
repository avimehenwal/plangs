#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 27 - Aug - 2020
# PURPOSE     : Generate new files in blogger format
# FILENAME    : newfile.sh
#
# touch new files with dates appended.
# 2020-07-22-new-blog-entry.md
#
# USAGE
# yarn new some-blog

# echo $(figlet "new post")
USAGE=$(cat << END
  Kindly provide new blog post name as a single argument
  Eg: yarn new my-awesome-blog-post-name
END
)

if [ $# -eq 1 ]
  then
    DESTINATION="$(pwd)/docs/blogposts/"
    FILE="$DESTINATION$(date +"%Y-%m-%d-")$1.md"
    touch $FILE
    echo "NEW-POST-CREATED: $FILE"
  else
    echo $USAGE
    exit 1
fi


# END
