import ManufactureSorter from '../ManufactureSorter/ManufactureSorter';

const Unchecker = () => {
    let filtered = ManufactureSorter();
    filtered.push("all");
    for (let i = 0; i < filtered.length; i++) {
        document.getElementById(filtered[i]).checked = false;
        
    }
};

export default Unchecker;
