version: 2.1

workflows:
  version: 2
  build:
    jobs:
      - build:
          filters:
            branches:
              only:
                - main

jobs:
  build:
    working_directory: ~/Project
    docker:
      - image: circleci/node:10.16.3
    steps:
      - checkout
      - run: 
          name: update-npm
          command: 'sudo npm install -g npm@5'
      - restore_cache:
          key: dependency-cache-{{ checksum "package-lock.json" }}
      - run:
          name: install-npm
          command: npm install
      - save_cache:
          key: dependency-cache-{{ cheksum "package-lock.json" }}
          paths:
            - ./node_modules
