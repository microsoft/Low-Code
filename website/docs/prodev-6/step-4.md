---
sidebar_position: 1
title: 4. Export and Branch
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 3** you will setup a workflow action, and add steps that will export the solution from dev environment and create a new branch.
:::

## 4.1 Export and branch

In this task you will create the workflow definition using the YAML provided. The action YAML uses two space indentation so follow that carefully as you build the workflow definition.  If in doubt, review the indentation shown in the images.

1.	Select the Actions tab.
2.	Click set up a workflow yourself.
3.	Change the file name to it export-and-branch.yml.

4.	Add the below YAML snippet. This defines the action trigger and some input parameters that could be changed when manually running the action.

```yaml
on:
  workflow_dispatch:
    inputs:
      #Change this value
      solution_name:
        description: 'name of the solution to worked on from Power Platform'
        required: true
        default: Prioritz
       #Do Not change these values
      solution_exported_folder:
        description: 'folder name for staging the exported solution *do not change*'
        required: true
        default: out/exported/
      solution_folder:
        description: 'staging the unpacked solution folder before check-in *do not change*'
        required: true
        default: out/solutions/
      solution_target_folder: 
       description: 'folder name to be created and checked in *do not change*'
       required: true
       default: solutions/

```

5.	Setup the workflow. Add the below YAML snippet after the last snippet. This sets up the jobs and identifies the first job as export-from-dev. This also defines the steps with the first one checking out the current main branch content.
```yaml
jobs:
  export-from-dev:
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v2
      with:
        lfs: true
```

6.	Next you will export both an unmanaged and managed solution file from your dev environment.
7.	Export the unmanaged solution. Add below snippet after the last snippet.

```yaml
name: export-solution action
      uses: microsoft/powerplatform-actions/export-solution@v0
      with:
        environment-url: ${{secrets.PowerPlatformDevUrl}}
        app-id: ${{secrets.PowerPlatformAppID}}
        client-secret: ${{ secrets.PowerPlatformClientSecret }}
        tenant-id: ${{secrets.PowerPlatformTenantID}}
        solution-name: ${{ github.event.inputs.solution_name }}
        solution-output-file: ${{ github.event.inputs.solution_exported_folder}}/${{ github.event.inputs.solution_name }}.zip
```

8.	Export the managed solution. Add below snippet after the last snippet.
```yaml
- name: export-managed-solution action
      uses: microsoft/powerplatform-actions/export-solution@v0
      with:
        environment-url: ${{secrets.PowerPlatformDevUrl}}
        app-id: ${{secrets.PowerPlatformAppID}}
        client-secret: ${{ secrets.PowerPlatformClientSecret }}
        tenant-id: ${{secrets.PowerPlatformTenantID}}
        solution-name: ${{ github.event.inputs.solution_name }}
        solution-output-file: ${{ github.event.inputs.solution_exported_folder}}/${{ github.event.inputs.solution_name }}_managed.zip
        managed: true
```

9.	The solution files are compressed files and don’t version control well.  Using unpack you will expand the solution files into a set of files that can be easily checked into the repo.

10.	Unpack solution file. Add below snippet after the last snippet.
```yaml
- name: unpack-solution action
      uses: microsoft/powerplatform-actions/unpack-solution@v0
      with:
        solution-file: ${{ github.event.inputs.solution_exported_folder}}/${{ github.event.inputs.solution_name }}.zip
        solution-folder: ${{ github.event.inputs.solution_folder}}/${{ github.event.inputs.solution_name }}
        solution-type: 'Both'
```

11.	Branch and prepare for pull. Add below snippet after the last snippet.
```yaml
name: branch-solution, prepare it for a PullRequest
      uses: microsoft/powerplatform-actions/branch-solution@v0
      with:
        solution-folder: ${{ github.event.inputs.solution_folder}}/${{ github.event.inputs.solution_name }}
        solution-target-folder: ${{ github.event.inputs.solution_target_folder}}/${{ github.event.inputs.solution_name }}
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        allow-empty-commit: true
```

12.	Click Start commit and then click Commit new file.

13.	Select the Actions tab and select the workflow you created.
14.	Click Run workflow.

15.	Click Run workflow again and wait for the workflow run to complete.


16.	Select the Code tab.
17.	Select Branches. You should see two branches.
18.	Click to open the branch that was created by the workflow action.
 

19.	You should see solution folder.
 

20.	Click Contribute and select Open pull request.

21.	Add description if you like and then click Create pull request.
22.	You should now see the pull request summary. Confirm that the branch has no conflicts with the main branch and that the changes can be merged into the main branch automatically.
23.	Click on the chevron button next to the Merge pull request button and select Squash and merge.
 

24.	Click Squash and merge.
25.	Click Confirm squash and merge.
26.	The pull request should get merged successfully.
27.	Do not navigate away from this page.
