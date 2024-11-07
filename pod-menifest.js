export const podManifest={
    metadata: {
        name: 'example-pod',
        labels: {
          app: 'nodejs',
        },
      },
      spec: {
        containers: [
          {
            name: 'my-node-app',
            image: 'suryanshverma/my-node-js-backend-app:latest',
            ports: [
              {
                containerPort: 8081,
              },
            ],
          },
        ],
      },
};
