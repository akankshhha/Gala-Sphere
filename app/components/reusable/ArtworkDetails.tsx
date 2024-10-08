import React from 'react';

export const ArtworkDetails: React.FC<{ objectDetails: any, fields: Array<{ label: string, value: string }> }> = ({ objectDetails, fields }) => {
  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <p key={index} data-aos="fade-left" data-aos-duration={`${(index + 1) * 100}`}>
          <strong>{field.label}:</strong> {objectDetails && objectDetails[field.value] != '' ? objectDetails[field.value] : 'N/A'}
        </p>
      ))}
    </div>
  );
};
