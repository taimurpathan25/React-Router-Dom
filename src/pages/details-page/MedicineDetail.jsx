
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const MedicineDetail = () => {
  const { id } = useParams();  // Get the image id from the URL
  const medicineData = useLoaderData();  // Loader data with all images

  // Find the image by ID or tags
  const image = medicineData.hits.find(item => item.id === parseInt(id));

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div className="image-detail">
      <h1>Image Detail</h1>
      <img src={image.largeImageURL} alt={image.tags} style={{ width: '30%' }} />
      <p><strong>Tags:</strong> {image.tags}</p>
      {/* Add more details if needed */}
    </div>
  );
};

export default MedicineDetail;
