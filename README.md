# LiWE Flow official Docker Image

This repository contains the Dockerfile and all necessary scripts to build the official Docker image for LiWE Flow.

Using this image, you can run a `LiWE Flow` instance and `Flow Sync` server in your local environment. This is very useful if you want to test
the application of if you want to keep a local Flow Sync server running.

## How to use this image

### Running a LiWE Flow instance

To run a LiWE Flow instance, you need to run the following command:

```bash
docker compose up
```

The first time, it will take a while to download all the necessary images and build the application. Once it is done, you will be able to access `LiWE Flow` at `http://localhost:3000`.

The `Flow Sync` server will be available at `http://localhost:12000`.

### Configuration

The standard `LiWE Flow` settings, should be OK for most of your uses.
The `Flow Sync` application is a _standard_ [LiWE](https://www.liwe.org) application, so you can configure it as you would do with any other LiWE application.\
In the docker configuration, the `Flow Sync` configuration file is located at `docks/flowsync/data.json` and it will be copied to the application folder when the container is created.

## Contributing

The project is in its early stages, so any contribution is welcome. If you want to contribute, please read the [contributing guidelines](CONTRIBUTING.md).

In particular, I am looking for feedback on your experience with the application. If you find any bug or you have any suggestion, please open an issue.

Please note that `LiWE Flow` is a side project, I have created to speed up [OS3 srl](https://www.os3.it) development, being able to write better and more structured code.\
We use `LiWE Flow` in production, and it is stable, but sometimes my time is limited, so I may not be able to answer to your issues immediately.

If you want, you can also contribute by [buying me a coffee](https://www.buymeacoffee.com/fsoft) or

`LiWE Flow` is an open source project, released under the MIT license. Any contribution you make to this repository will be under the MIT license.

When you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.
