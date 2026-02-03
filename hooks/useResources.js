import {useEffect, useState} from 'react';
import data from '../data/resources.json';

export const useResources = () => {

  const [resources, setResources] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resource = data.map(r => {
      return {
        resource: r.resource,
        terrain: r.terrain,
        icon: r.icon,
        hexImage: r.hexImage,
        cardImage: r.cardImage,
        commodity: {
          name: r.commodity?.name,
          icon: r.commodity?.icon,
          cardImage: r.commodity?.cardImage
        }
      }
    });
    setResources(resource);
    setIsLoading(false);
    return(() => {
      setResources(null);
    })
  }, []);

  return { resources, isLoading };
}