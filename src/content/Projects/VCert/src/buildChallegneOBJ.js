    // Global object to store parsed values
    const cc = {};
    const ifrm = window; 
    console.log(ifrm)
    function parseChallengeString(str) {
        // Remove the prefix 'challenge_' if it exists
        if (str.startsWith('challenge_')) {
            str = str.substring(10);
        }
    
        // Split the string by underscores
        const parts = str.split('_');
    
        // Ensure there are at least two parts
        if (parts.length < 2) {
            throw new Error('Invalid string format');
        }
    
    // Process the last part to remove anything after a dot
    const lastPart = parts[parts.length - 1];
    const dotIndex = lastPart.indexOf('.');
    if (dotIndex !== -1) {
        cc.thisClass = lastPart.substring(0, dotIndex);
    } else {
        cc.thisClass = lastPart;
    }
        // Extract the last two parts and store them in the global object
        cc.thisChallengeNumber = parts[parts.length - 2];
        cc.thisClass = parts[parts.length - 1];
        console.log('Current Challenge:', cc.thisClass + ' #', cc.thisChallengeNumber); // Should log: '123'    
    }
    
    // Example usage
    //parseChallengeString(ifrm.src);