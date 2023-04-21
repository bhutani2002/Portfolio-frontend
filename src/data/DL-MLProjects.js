import BT from "../assets/images/BT-Denoising.jpg"
import DA from "../assets/images/Exploratory-DIC.jpg"
import KS from "../assets/images/KS.jpg"
import BC from "../assets/images/Breast-Cancer-Ultrasound.jpg"
import UNET from "../assets/images/UNET.jpg"
import ImgT from "../assets/images/IP.jpg"
const DML = [
    {
        imgUrl: BT, 
        title: "Denoising of Brain Tumor MRI Images",
        description: "We want to reduce noise in Brain MRI images which usually contain Gaussian, Rician, Rayleigh noises. And we intend to do it using Various Classical Filters and AutoEncoders.", 
        skills: "Python, Machine Learning and Deep Learning",
        weblink: "https://github.com/bhutani2002/BT-Denoising",
      },
      {
        imgUrl: DA,
        title: "Exploratory Data Analysis",
        description: "Data Analysis is done on the feedback form of the DIC summer training. In this data analysis we used many different libraries and too used sentiment analysis libraries and methods. Heat Map,Pie charts, line graphs, stack bar graphs, multiple bar graphs, sub plots,pair plots were used to represent the data of the form in a structural and presentable manner.", 
        skills: "Python, NLP and plotting libraries",
        weblink: "https://github.com/bhutani2002/Data_Analysis-Exploratory",
      },
      {
        imgUrl: KS, 
        title: "Kidney Stone Detection",
        description: "METHODOLOGY: Problem Statement -> Data Acquisition -> Tools and Metrics -> Data Cleaning -> Exploratory Data Analysis -> Modelling and Tuning Data -> Evaluating The Model -> Deploying the Model", 
        skills: "Python, Machine Learning, Deep Learning",
        weblink: "https://www.kaggle.com/code/raagbhutani/kidney-stone-detection",
      },
      {
        imgUrl: BC, 
        title: "Breast Cancer Detection",
        description: "A dataset is taken from kaggle and is worked upon by making a Sequential model. Here, the images are resized,reshaped and processed based on the what the model takes in. Then a model is built and trained on the given dataset and then gets us the predictions on the remaining dataset.", 
        skills: "Python, Machine Learning, Deep Learning",
        weblink: "https://github.com/bhutani2002/Breast_Cancer_Detection-UltrasoundImages",
      },
      {
        imgUrl: UNET, 
        title: "UNET-Brain Tumor",
        description: "Here we tried to predicted the correct mask for a particular image by training a 2-d unet model. For improving the accuracy and performance of the model we provided more data to the model by augmenting more data from the dataset.", 
        skills: "Python, Machine Learning, Deep Learning",
        weblink: "https://github.com/bhutani2002/Brain-Tumor_2d-Unet-Model",
      },
      {
        imgUrl: ImgT, 
        title: "Image Processing Tutorials",
        description: "Image processing is the process of transforming an image into a digital form and performing certain operations to get some useful information from it.", 
        skills: "Python, Image Processing",
        weblink: "https://www.kaggle.com/code/raagbhutani/image-processing-tutorials",
      },
];

export default DML