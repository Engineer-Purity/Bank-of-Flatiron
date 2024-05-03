const express = require('express');
const app = express();

// Other middleware and route configurations...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
