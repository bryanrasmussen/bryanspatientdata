
const Header = ({ title }) => `
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" href="/favicon.ico" />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css'>
      <style type
      ="text/css">
        header {
            margin-left: -10px;
        }
        .searchForm {
            width: 40%;
            background-color: beige;
            color: darkblue;
            position: fixed;
            right: 10px;
            height: 300px;
            overflow: auto;
        }
        .searchForm h3 {
            color: darkblue;
            margin-bottom: .5rem;
        }
        .searchForm input {
            border: 1px solid darkblue;
            background-color: white;
            color: darkblue;
            max-width: 75px;
            width: 50&;
        }
        
        .submit {
            background-color: darkblue;
            min-width: 100px;
        }

        .searchResult {
            padding-left: 1rem;
            width: 57%;
            min-width: 250px
        }

        .searchResult::before {
            font-weight: bold;
            font-size: 1.5rem;
            margin-right: 0.5rem;
            line-height: 1;
        }
        
        .doubleField {
            display: flex;
        }
        .pagination {
            display: flex;
            list-style: none
        }
        .paginationLink {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        .SearchToggler {display: none}
        @media only screen and (max-width: 750px) {
            .searchForm {
                position: relative;
                width: 100%;
                right: inherit;
                height: auto;
            }
            .SearchToggler {display: block}
        }
      </style>
      <title>${title}</title>
    </head>
`;

export default Header;
