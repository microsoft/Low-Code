---
sidebar_position: 1
title: 5. Release to Test
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 5** you will create a workflow action and add steps that will release the solution you exported to the test environment. 
:::

## 5.1 Create workflow

1.	Select the Actions tab.
2.	Click New workflow.
3.	Click set up a workflow yourself.
 

4.	Change the file name to it release-to-test.yml.
5.	Add the following trigger. This will trigger on creation of a new release.
```yaml
on:
  release:
      types: [created] 
```

6.	Define constants. Add the below YAML snippet.

```yaml
env:
  solution_name: Prioritz
  solution_source_folder: solutions
  solution_outbound_folder: out/solutions
  solution_release_folder: out/release
```

7.	Add job and steps. Add the below YAML snippet.
```yaml:
jobs:
  convert-to-managed:
   runs-on: windows-latest
    
   steps:
   - uses: actions/checkout@v2
     with:
       lfs: true
```

8.	Package managed solution. Add the below YAML snippet. This will take the individual files and put them in a compressed file that can be deployed.

```yaml
- name: Pack managed solution
     uses: microsoft/powerplatform-actions/pack-solution@v0
     with:
       solution-folder: ${{ env.solution_source_folder}}/${{ env.solution_name }}
       solution-file: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_managed.zip
       solution-type: Managed
```

9.	Package unmanaged solution. Add the below YAML snippet.
```yaml
- name: Pack unmanaged solution
     uses: microsoft/powerplatform-actions/pack-solution@v0
     with:
       solution-folder: ${{ env.solution_source_folder}}/${{ env.solution_name }}
       solution-file: ${{ env.solution_outbound_folder}}/${{ env.solution_name }}_unmanaged.zip
       solution-type: Unmanaged
```

10.	Upload solution artifacts. Add the below YAML snippet.
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


11.	Release to staging. Add the below YAML snippet. This defines a second job to deploy.
```yaml
release-to-staging:
    needs: [ convert-to-managed ]
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v2
      with:
        lfs: true
```

12.	Download artifacts. Add the below YAML snippet.
```yaml
name: Fetch the ready to ship solution from GH artifact store
      uses: actions/download-artifact@v2
      with:
        name: managedSolutions
        path: ${{ env.solution_release_folder}}
```

13.	Import the managed solution to the test environment. Add the below YAML snippet.
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

14.	Click Start commit and then click Commit new file.


15.	Select the Code tab.
16.	Go to the Releases section and click Create new release.
 

17.	Click on the Choose a tag button, enter v1.0.0, and select + Create new tag on publish.
 

18.	Click Publish release.
19.	Select the Actions tab and monitor the workflow.

20.	The release should complete successfully.
21.	Check your test environment and you should see the solution deployed.

