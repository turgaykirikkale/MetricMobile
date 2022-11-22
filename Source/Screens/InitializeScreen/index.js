import React, {useState} from 'react';
import MMFullScreenLoader from '../../Components/UI/MMFullScreenLoader';

const InitializeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return <MMFullScreenLoader isLoading={isLoading} />;
};

export default InitializeScreen;
