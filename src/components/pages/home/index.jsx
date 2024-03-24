import React from "react";
import Card from "../../common/Card";

const HomePage = () => {
  const imageUrl3DSegmentation =
    "https://img.freepik.com/free-photo/3d-render-medical-background-with-brain-being-attacked-by-virus-cells_1048-6355.jpg";

  const imageUrl2DSegmentation =
    "https://neurosciencenews.com/files/2023/01/protein-movement-brain-tumor-neurosciences.jpg";

  const imageUrl3DReconstruction =
    "https://images.sbs.com.au/dims4/default/3608424/2147483647/strip/true/crop/1732x974+0+117/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fce%2F1a%2Fd4397f054d3c88f99c44a4ba2ad0%2Fgettyimages-140892295.jpg";

  const imageUrlAnnounced =
    "https://img.freepik.com/free-photo/depiction-human-brain-intellect_23-2150936727.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais";

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 justify-items-center">
        <Card
          imageUrl={imageUrl2DSegmentation}
          title="2D Image Segmentation"
          description="2D brain MRI tumor segmentation is a critical process in medical imaging that uses advanced algorithms to identify and outline tumor regions in 2D MRI slices. This technique aids in precise diagnosis, treatment planning, and monitoring of brain tumors."

          onClickLocation="/2dImageSegmentation"

        />
        <Card
          imageUrl={imageUrl3DSegmentation}
          title="3D Image Segmentation"
          description="3D brain MRI tumor segmentation is a pivotal step in medical imaging, utilizing sophisticated algorithms to delineate tumor regions across three-dimensional MRI scans of the brain."
        
          onClickLocation="/3dImageSegmentation"
        />
        <Card
          imageUrl={imageUrl3DReconstruction}
          title="3D Image Reconstruction"
          description="3D image reconstruction in medical imaging combines multiple 2D images to create a three-dimensional representation. It aids in precise diagnosis, treatment planning, and surgical interventions by providing detailed spatial information."
          onClickLocation="/3dImageReconstruction"

        />
        <Card
          imageUrl={imageUrlAnnounced}
          title="Coming Soon...🤞"
          disabled={true}
         
        />
      </div>
    </div>
  );
};

export default HomePage;
