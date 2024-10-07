import accounts from "./accounts";
import communitySubdomains from "./community-subdomains";
import terms from "./terms";
import regex from "./regex";
import excludeTerms from "./excludeTerms";
import dids from "./did";


const allTerms = terms.concat(accounts);

export {
    regex,
    excludeTerms,
    allTerms,
    dids,
    communitySubdomains
}