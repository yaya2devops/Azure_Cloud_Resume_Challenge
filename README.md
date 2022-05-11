# Azure Cloud Resume Challenge

Hello, 

I'm delighted to take part in the Azure Cloud Resume Challenge.
This is a portion of the [A Cloud Guru Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure).

➡️[Here Is My GO At It.](https://azureresumesto.z13.web.core.windows.net) 

## Introduction

Challenges:

- [x] Create a GitHub repo.
- [x] Use HTML and CSS to build the website and store the code in the repo.
- [x] Add a visitor count to the website using Azure Functions, Azure Cosmos DB.
- [x] Deploy the website to Azure Blob Storage.
- [x] Enable HTTPS
- [ ] Enable custom domain support using Azure Content Delivery Network
- [x] Unit Testing using DOTNET 6
- [x] Pipeline Configuration and Set up GitHub Actions 

## Progress
I was able to complete all of the challenges except for the CDN part under Azure Storage since the "Azure for Students" subscription does not support it.

## Considering a solution for the custom domain
Using [CloudFlare DNS](https://support.cloudflare.com/hc/en-us/articles/201720164-Creating-a-Cloudflare-account-and-adding-a-website) as indirect CNAME validation + this should increase the speed and security 😃. <br/>
 [Look here for more](https://adamtheautomator.com/azure-static-website/) <br/>
 [This one is helpful too!](https://thecloudhub.com/2019/09/24/using-cloudflare-with-azure-blob-storage/)


## Thoughts..
I'd been thinking about this project for a while. I was so moved by [The Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/) and the cool technologies used in tandem. Additionally, I'm an Azure fanboy so I thought it best to give it a shot prior to my excursion into aws!

## Table of Contents
1. [Project Description](#introduction)
2. [To be done](#next)
3. [Building Static Website](#buildsite)
4. [Deployment of Azure Function](#DAzureFunction)
5. [Deployment of Website to Azure](#DWebsiteAzure)
6. [Building CI/CD pipeline](#CI/CD)

## Description <a name="introduction"></a>

- The Cloud Resume Challenge is a hands-on project designed to help bridge the gap from cloud certification to cloud job. It incorporates many of the skills that real cloud and DevOps engineers use in their daily work. Cloud challenge was designed by [Forrest Brazeal.](https://forrestbrazeal.com/) More information about the challenge can be found on official [website.](https://cloudresumechallenge.dev/)
- Key objectives for the project
    - Write static website in HTLM and styled in CSS
    - Deploy static website in Azure storage
    - Setup access to website via secure protocol HTTPS
    - Connect website to custom DNS domain name
    - Create visitor counter for the website with JavaScript and Azure’s Functions in Python
    - Store visit counts in Azure CosmosDB
    - Use API to establish communication between CosmosDB, Azure Functions and website
    - Create unit tests for Azure’s Functions in Python
    - Set up GitHub Actions for CI/CD deployment

## To be done <a name="next"></a>

- Create resume and host it in Azure’s General Purpose v2 storage
- Create Azure Key Vault and store all secrets securely
- Incorporate Terraform to build resources in Azure

## Building Static Website <a name="buildsite"></a>

- Create project in [GitHub](https://github.com/join)
    - clone repository locally
    
    ```
    git clone git@github.com:Y4HYA4/Azure-Resume-Challenge.git
    ```
    
- [Download website template](https://www.styleshout.com/) to not start from complete scratch
- [Use Visual Studio Code](https://code.visualstudio.com/) to edit your web page
    - Once you made all the changes to the code and want to save your changes in GitHub
    
    ```
    git add -A
    git commit -m "What changes did you make"
    git push
    ```
    
- Create [JavaScript code](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) for Counter every time page is loaded
    - [Trigger](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) when initial HTLM document has been loaded
    - [Get data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) from API function in JSON

Creation of Azure Function

- [Azure Account](https://azure.microsoft.com/en-us/free) needs to be created
- [Build ComosDB](https://docs.microsoft.com/en-us/azure/cosmos-db/sql/create-cosmosdb-resources-portal) database via [Azure Portal](https://portal.azure.com/?quickstart=true#home)
    - [Resource Group](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html#query-the-database) needs to be created first or as part of CosmosDB creation process
- [Create container](https://docs.microsoft.com/en-us/azure/cosmos-db/sql/how-to-create-container) in Azure Cosmos
    - On left board select > Data Explorer > New Database > In data section database will be created > click 3 dots > new container > partition key </id> > Go to items in container > create new row
        
        ```
        {
        	"id: "1",
        	"count": 0
        }
        ```
        
- [Create Azure Function](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=csharp) in Visual Studio Code
    - Install [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
        
        ```
        vscode:extension/ms-azuretools.vscode-azurefunctions
        ```
        
    - Install [Python extension](https://code.visualstudio.com/docs/python/python-tutorial)
    - Create local [Azure Function project](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-python)
    - Install package inside your project directory for Azure-Cosmos (make sure to update requirements.txt as well before function deployment to Azure)
        
        ```
        pip install azure-cosmos
        ```
        
    - Create an [HTTP trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi%2Cazurecli-linux%2Capplication-level#http-trigger-and-bindings) in your Azure Function as well as [connection to CosmosDB](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html) to [retrieve](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html#query-the-database) and [update](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/cosmos/azure-cosmos/samples/examples.py) data inside container

## Deployment of Azure Function <a name="DAzureFunction"></a>

- [Publish](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html#query-the-database) Azure function to Azure
    - Select the same resource group as for CosmosDB
    - Create new [Azure storage account](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html#query-the-database) (can be done when publishing Azure function as well)
- Edit Azure Function’s [application settings](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-cosmos/4.2.0/index.html#query-the-database) with your secrets
    - You can use Azure Key Vault to store them securely
- Get [Function URL](https://microsoftlearning.github.io/AZ-900T0x-MicrosoftAzureFundamentals/Instructions/Walkthroughs/08-Implement%20Azure%20Functions.html)
    - Add URL into your JavaScript code for counter
- Enable [Cross-Origin Resource Sharing](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors) (CORS) for you function in Azure

## Deployment of Website to Azure <a name="DWebsiteAzure"></a>

- Install [Azure static Web Apps extension](https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript#install-azure-static-web-apps-extension) for Visual Studio Code and create static web app
- Create [Azure Content Delivery Network](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint) (CDN) profile and endpoint for your website
- [Map your custom domain](https://docs.microsoft.com/en-us/azure/cdn/cdn-map-content-to-custom-domain?tabs=azure-dns%2Cazure-portal%2Cazure-portal-cleanup) to CDN profile
    - I’ve used [NameCheap](https://www.namecheap.com/) for my custom domain
- Enforce [HTTPS traffic only](https://stackoverflow.com/questions/39244265/azure-web-app-redirect-http-to-https)
- Redirect [HTTP traffic to HTTPS](https://stackoverflow.com/questions/39244265/azure-web-app-redirect-http-to-https)
- Get your website URL and edit [CORS](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors) for allowed origins

## Building CI/CD pipeline <a name="CI/CD"></a>

- Create [GitHub Actions workflows](https://docs.github.com/en/actions/quickstart) (Front End for static site deployment and Back End for unit testing)
- Generate [deployment credentials](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel#generate-deployment-credentials) and add your workflow for static site
- Write Python code to [test Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi%2Cazurecli-linux%2Capplication-level#unit-testing)
    - [Pytest](https://docs.pytest.org/en/6.2.x/getting-started.html) can be used to run unit tests
- Set up a [Python workflow](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=python#deploy-the-function-app) that uses a publish profile



# More Resources!
### Storage Account

- Tutorial: [Host a static website on Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)

### Enable HTTPS and custom domain

- Quickstart: [Create an Azure CDN profile and endpoint](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)
- Tutorial: [Map a custom domain with HTTPS enabled](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal#map-a-custom-domain-with-https-enabled)

### Set up GitHub Action

- Tutorial: [Use GitHub Actions to deploy your static website to Azure storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions)
- This workflow is compromised of 4 tasks:
  - [Checkout](https://github.com/actions/checkout): this will checkout our code, so the workflow can access it.
  - [Azure Login](https://github.com/marketplace/actions/azure-login): this will perform a login to Azure, so we can run commands. This is the `az login` command.
  - [Azure CLI](https://github.com/marketplace/actions/azure-cli-action): this allows us to automate our workflow by executing Azure CLI commands. We'll use this task twice; first to upload our content to the blob storage and after that to purge the CDN endpoint.
- I encountered an issue with the **Purge CDN endpoint** task.
- This is the command to run to purge the CDN endpoint: 
`az cdn endpoint purge --content-paths  "/*" --profile-name "CDN_PROFILE_NAME" --name "CDN_ENDPOINT" --resource-group "RESOURCE_GROUP"`
- The `--profile name` argument is the actual name of the CDN profile resource.
- The `--name` argument is the name of the endpoint, as it appears in the hostname *mywebsite.azureedge.net*.
- When you add an endpoint to your CDN profile, a new resource is created with a long name. This is not the name we should use for our command.
