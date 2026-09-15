function RequirementList({
  requirements,
}) {
  return (
    <div className="requirements">

      {requirements.map(
        (requirement, index) => (
          <div
            className="requirement"
            key={requirement}
          >

            <span>
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>

            <p>{requirement}</p>

          </div>
        )
      )}

    </div>
  );
}
export default RequirementList