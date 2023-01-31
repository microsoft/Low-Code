---
sidebar_position: 1
title: 5. Release to Test
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 5** you will create a workflow action and add steps that will release the solution you exported to the test environment. 
:::

:::tip Important
You will need **GitHub account** in this lab
:::

## 5.1 Create workflow

1.	👉 the Actions tab. 👉 New workflow. 👉 set up a workflow yourself.
 
 ![Lab-05 Image](./img/lab05%20(30).jpg)

2.	Change the file name to it `release-to-test.yml`. Add the following trigger. This will trigger on creation of a new release.

:::tip Note 
Source Code available [**here**](https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab05/ReleaseToTest.yml)
:::

```yaml
on:
  release:
      types: [created] 
```

![Lab-05 Image](./img/lab05%20(31).jpg)

3.	Define constants. Add the below [`YAML`](https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab05/ReleaseToTest.yml) snippet.

```yaml
env:
  solution_name: Prioritz
  solution_source_folder: solutions
  solution_outbound_folder: out/solutions
  solution_release_folder: out/release
```

4.	Add job and steps. Add the below YAML snippet.
```yaml:
jobs:
  convert-to-managed:
   runs-on: windows-latest
    
   steps:
   - uses: actions/checkout@v2
     with:
       lfs: true
```

5.	Package managed solution. Add the below YAML snippet. This will take the individual files and put them in a compressed file that can be deployed.

```yaml
- name: Pack managed solution
     uses: microsoft/powerplatform-actions/pack-solution@v0
     with:
       solution-folder: ${{ env.solution_source_folder}}/${{ env.solution_name }}
       solution-file: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_managed.zip
       solution-type: Managed
```

6.	Package unmanaged solution. Add the below YAML snippet.
```yaml
- name: Pack unmanaged solution
     uses: microsoft/powerplatform-actions/pack-solution@v0
     with:
       solution-folder: ${{ env.solution_source_folder}}/${{ env.solution_name }}
       solution-file: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_unmanaged.zip
       solution-type: Unmanaged
```

7.	Upload solution artifacts. Add the below YAML snippet.
```yaml
- name: Upload the unmanaged solution to GH artifact store
     uses: actions/upload-artifact@v2
     with:
       name: unmanagedSolutions
       path: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_unmanaged.zip

- name: Upload the managed solution to GH artifact store
     uses: actions/upload-artifact@v2
     with:
       name: managedSolutions
       path: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_managed.zip 
```


8.	Release to staging. Add the below YAML snippet. This defines a second job to deploy.
```yaml
release-to-staging:
    needs: [ convert-to-managed ]
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v2
      with:
        lfs: true
```

9.	Download artifacts. Add the below YAML snippet.
```yaml
name: Fetch the ready to ship solution from GH artifact store
      uses: actions/download-artifact@v2
      with:
        name: managedSolutions
        path: ${{ env.solution_release_folder}}
```

10.	Import the managed solution to the test environment. Add the below YAML snippet.
```yaml
name: Import solution to prod env
      uses: microsoft/powerplatform-actions/import-solution@v0
      with:
        environment-url: ${{secrets.PowerPlatformTestUrl}}
        app-id: ${{secrets.PowerPlatformAppID}}
        client-secret: ${{ secrets.PowerPlatformClientSecret }}
        tenant-id: ${{secrets.PowerPlatformTenantID}}
        solution-file: ${{ env.solution_release_folder}}/${{ env.solution_name }}_managed.zip
        run-asynchronously: true
```

## 3.2 Commit and Publish 

1.	Click Start commit and then click Commit new file.

![Lab-05 Image](./img/lab05%20(33).jpg)

2.	👉 the Code tab.👉 Releases section and 👉 Create new release.
 
![Lab-05 Image](./img/lab05%20(34).jpg)

3.	Click on the Choose a tag button, enter v1.0.0, and select + Create new tag on publish.
 
![Lab-05 Image](./img/lab05%20(35).jpg)

4.	Click Publish release.
5.	Select the Actions tab and monitor the workflow.

![Lab-05 Image](./img/lab05%20(36).jpg)

:::tip Note
The release should complete successfully.
Check your test environment and you should see the solution deployed.
:::
