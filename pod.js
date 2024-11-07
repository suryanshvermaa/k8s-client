import k8s from "@kubernetes/client-node";
import {podManifest} from './pod-menifest.js';

const kubeConfig=new k8s.KubeConfig();
kubeConfig.loadFromDefault();
const k8sClient=kubeConfig.makeApiClient(k8s.CoreV1Api);

async function createPod() {
    try {
        const response=await k8sClient.createNamespacedPod('default',podManifest);
        console.log('pod created',response.body.metadata);
    } catch (error) {
        console.log(error);
    }
}
async function deletePod() {
    const response=await k8sClient.deleteNamespacedPod("example-pod",'default');
    console.log("pod deleted");
}
deletePod();