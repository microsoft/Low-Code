---
sidebar_position: 1
title: 4. Export and Branch
---

:::info LAB SCENARIO

Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team’s deployments.


In **Exercise 4** you will setup a workflow action, and add steps that will export the solution from dev environment and create a new branch.
:::

:::tip Important
You will need **GitHub account** in this lab
:::

## 4.1 Export and branch

In this task you will create the workflow definition using the YAML provided. The action YAML uses two space indentation so follow that carefully as you build the workflow definition.  If in doubt, review the indentation shown in the images.

1.	👉 the Actions tab. 👉 **set up a workflow yourself**. Change the file name to **export-and-branch.yml**.

![Lab-05 Image](./img/lab05%20(20).jpg)

![Lab-05 Image](./img/lab05%20(21).jpg)

2.	Add the below [`YAML snippet`](https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab05/ExportAndBranch.yml). This defines the action trigger and some input parameters that could be changed when manually running the action.

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

![Lab-05 Image](./img/lab05%20(22).jpg)

3.	Setup the workflow. Add the below YAML snippet after the last snippet. This sets up the jobs and identifies the first job as export-from-dev. This also defines the steps with the first one checking out the current main branch content.
```yaml
jobs:
  export-from-dev:
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v2
      with:
        lfs: true
```

4.	Next you will export both an unmanaged and managed solution file from your dev environment.
5.	Export the unmanaged solution. Add below snippet after the last snippet.

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

6.	Export the managed solution. Add below snippet after the last snippet.
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

7.	The solution files are compressed files and don’t version control well.  Using unpack you will expand the solution files into a set of files that can be easily checked into the repo.

8.	Unpack solution file. Add below snippet after the last snippet.
```yaml
- name: unpack-solution action
      uses: microsoft/powerplatform-actions/unpack-solution@v0
      with:
        solution-file: ${{ github.event.inputs.solution_exported_folder}}/${{ github.event.inputs.solution_name }}.zip
        solution-folder: ${{ github.event.inputs.solution_folder}}/${{ github.event.inputs.solution_name }}
        solution-type: 'Both'
```

9.	Branch and prepare for pull. Add below snippet after the last snippet.
```yaml
name: branch-solution, prepare it for a PullRequest
      uses: microsoft/powerplatform-actions/branch-solution@v0
      with:
        solution-folder: ${{ github.event.inputs.solution_folder}}/${{ github.event.inputs.solution_name }}
        solution-target-folder: ${{ github.event.inputs.solution_target_folder}}/${{ github.event.inputs.solution_name }}
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        allow-empty-commit: true
```

## 4.2 Commit and Pull Request

1.	Click Start commit and then click Commit new file.

![Lab-05 Image](./img/lab05%20(23).jpg)

2.	👉 the Actions tab and select the workflow you created. 👉 Run workflow.

![Lab-05 Image](./img/lab05%20(24).jpg)

3.	Click Run workflow again and wait for the workflow run to complete.

![Lab-05 Image](./img/lab05%20(25).jpg)


4.	👉 the Code tab. 👉 Branches. You should see two branches.
5.	Click to open the branch that was created by the workflow action.

![Lab-05 Image](./img/lab05%20(26).jpg)


6.	You should see solution folder.
 
![Lab-05 Image](./img/lab05%20(27).jpg)

7.	Click Contribute and select Open pull request.

![Lab-05 Image](./img/lab05%20(28).jpg)


8.	Add description if you like and then click Create pull request.

:::tip Note 
You should now see the pull request summary. Confirm that the branch has no conflicts with the main branch and that the changes can be merged into the main branch automatically.
:::

## 4.3 Merge Pull Request

1.	Click on the chevron button next to the Merge pull request button and select Squash and merge.

 ![Lab-05 Image](./img/lab05%20(29).jpg)

2.	Click Squash and merge.
3.	Click Confirm squash and merge.

:::info Note
The pull request should get merged successfully.

Do not navigate away from this page.
:::