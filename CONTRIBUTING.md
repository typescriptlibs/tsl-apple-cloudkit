# Instructions for Logging Issues #


## 1. Do you have a question? ##

The issue tracker is for **issues**, in other words, bugs and suggestions.
If you have a *question*, please use [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudkit), your favorite search engine, or other resources.


## 2. Did you find a bug? ##

When logging a bug, please be sure to include the following:
 * What version of TSL-Apple-CloudKit you're using (run `npm list tsl-apple-cloudkit`)
 * What version of TypeScript you're using (run `tsc --v`)
 * If at all possible, an *isolated* way to reproduce the behavior
 * The behavior you expect to see, and the actual behavior


## 3. Do you have a suggestion? ##

We also accept suggestions in the issue tracker.

In general, things we find useful when reviewing suggestions are:
* A description of the problem you're trying to solve
* An overview of the suggested solution
* Examples of how the suggestion would work in various places
  * Code examples showing e.g. "this would be an error, this wouldn't"
  * Code examples showing the generated JavaScript (if applicable)
* If relevant, precedent in other languages can be useful for establishing context and expected behavior



# Instructions for Contributing Code #


## Code of Conduct ##

This project has adopted a [Code of Conduct](https://typescriptlibs.org/CONDUCT.pdf).
Please contact <conduct@typescriptlibs.org> with any questions or comments.


## Contributing bug fixes ##

TypeScriptLibs is currently accepting contributions in the form of bug fixes.
A bug must have an issue tracking it in the issue tracker that has been approved (set to a Milestone) by the TypeScriptLibs team.
Your pull request should include a link to the bug that you are fixing.
If you've submitted a PR (pull request) for a bug, please post a comment in the bug to avoid duplication of effort.


## Contributing features ##

Features (things that add new or improved functionality) may be accepted, but will need to first be approved (set to a Milestone by a TypeScriptLibs coordinator with the message "Approved") in the suggestion issue.

Design changes will not be accepted at this time.
If you have a design change proposal, please log a suggestion issue.


## Legal ##

You will need to complete a Contributor License Agreement (CLA).
Briefly, this agreement testifies that you are granting us permission to use the submitted change according to the terms of the project's license, and that the work being submitted is under appropriate copyright.

Please submit a Contributor License Agreement (CLA) before submitting a pull request.
You may print the agreement ([Contribution License Agreement](https://typescriptlibs.org/CLA.pdf), sign, scan, and email it back to <cla@typescriptlibs.org>.
Be sure to include your github user name along with the agreement.
Once we have received the signed CLA, we'll review the request.


## Housekeeping ##

Your pull request should:

* Include a description of what your change intends to do
* Be a child commit of a reasonably recent commit in the **master** branch
  * Requests need not be a single commit, but should be a linear sequence of commits (i.e. no merge commits in your PR)
* It is desirable, but not necessary, for the tests to pass at each commit
* Have clear commit messages
  * e.g. "Refactor feature", "Fix issue", "Add tests for issue"
* Include adequate tests
  * At least one test should fail in the absence of your non-test code changes. If your PR does not match this criteria, please specify why
  * Tests should include reasonable permutations of the target fix/change
  * Include baseline changes with your change
  * All changed code must have 100% code coverage
* To avoid line ending issues, set `autocrlf = input` and `whitespace = cr-at-eol` in your git configuration
