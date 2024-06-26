import '../styles/components/SectionHeading.scss';


export default function SectionHeading(props){
  const { sectionName } = props;

  return (
    <div className="section-heading">
      <div className="sh-line"></div>
      <div className="horizontal-hexagon">
        <p>{sectionName}</p>
      </div>
      <div className="sh-line"></div>
    </div>
  );
};