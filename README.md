
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/deep5050/MastJokeMara">
    <img src="images/logo.jpg" alt="Logo">
  </a>

  <h3 align="center">MAST JOKE MARA</h3>

  <p align="center">
    A GitHub workflow to greet with a random joke on a new isssue or Pull Request :)
  <br/>

<br />
  <a href="https://github.com/deep5050/MastJokeMara/graphs/contributors">
  <img src="https://img.shields.io/github/contributors/deep5050/MastJokeMara.svg?style=flat-square">
  </a>
  <a href="https://github.com/deep5050/MastJokeMara/network/members">
  <img src="https://img.shields.io/github/forks/deep5050/MastJokeMara.svg?style=flat-square">
  </a>
  <a href="https://github.com/deep5050/MastJokeMara/stargazers">
  <img src="https://img.shields.io/github/stars/deep5050/MastJokeMara.svg?style=flat-square">
  </a>
  <a href="https://github.com/deep5050/MastJokeMara/issues">
  <img src="https://img.shields.io/github/issues/deep5050/MastJokeMara.svg?style=flat-square">
  </a>
  <a href="https://github.com/deep5050/MastJokeMara/blob/master/LICENSE.txt">
  <img src="https://img.shields.io/github/license/deep5050/MastJokeMara.svg?style=flat-square">
  </a> 
  <!-- <a href="https://linkedin.com/in/othneildrew">
  <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555">
  </a> -->
        <br/><a href="https://github.com/deep5050/MastJokeMara"><strong>See it on Marketplace »</strong></a>
    <br />
    <!-- <br /> -->
    <a href="https://github.com/deep5050/MastJokeMara">View Demo</a>
    ·
    <a href="https://github.com/deep5050/MastJokeMara/issues">Report Bug</a>
    ·
    <a href="https://github.com/deep5050/MastJokeMara/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Version History](#version-history)
* [Contributing](#contributing)
* [Support](#support)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
* [Related Works](#related-works)


## About The Project
![Issue demo](images/issue.png)

### Built With
@action/javascript

## Getting Started

### Prerequisites


### Installation



<!-- USAGE EXAMPLES -->
## Usage
```yaml
name: mast joke mara
on:
  pull_request:
  issues:
  types: [opened]

jobs:
  comment:
    if: github.event_name=='pull_request' || github.event_name=='issues'
    runs-on: ubuntu-latest
    steps:
      - name: mast joke mara
        uses: deep5050/MastJokeMara@main
        id: MastJokeMara
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
````

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/deep5050/MastJokeMara/issues) for a list of proposed features (and known issues).


## Version History

`v1.0.0` Initial release


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request


## Support

All Kinds Of Supports Are Welcome :raised_hands:! The Most Basic Way To Show Your Support Is To Star :star2: The Project, Or To Raise Issues :speech_balloon: You Can Also Support This Project By [**becoming a sponsor on GitHub**](https://github.com/sponsors/deep5050) :clap: Or By Making A [**Paypal**](https://paypal.me/deep5050) Donation :)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Dipankar Pal - dipankarpal5050@gmail.com



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements


## Related Works
[NaughtyLust](https://github.com/deep5050/NaughtyLust) : Awesome Nautilus Scripts For Linux.

[qikQR](https://github.com/deep5050/qikQR) : Minimal QR Code Generator App Made With Electron.

[cppcheck-action](https://github.com/deep5050/cppcheck-action) : Check Security Flaws In Your C/C++ Codes Right From GitHub Action Workflows.

[autopy-lot](https://github.com/deep5050/autopy-lot) : GitHub Action Setup To Convert Jupyter Notebooks To Python Scripts And Markdowns.

<div align=center>
<p align=center><img align=center src="https://raw.githubusercontent.com/liyasthomas/templates/master/assets/logo.gif" alt="unicorn" width="400">
</p>
<p align=center>Happy Coding</p>
  
<p align=center><img align=center  src="https://visitor-badge.laobi.icu/badge?page_id=deep5050.MastJokeMara" alt="Visitors">  </p>

</div>
