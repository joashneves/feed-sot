import accounts from "./accounts";
import communitySubdomains from "./community-subdomains";
import terms from "./terms";
import regex from "./regex";
import excludeTerms from "./excludeTerms";


const allTerms = terms.concat(accounts);

export {
    regex,
    excludeTerms,
    allTerms,
    communitySubdomains
}