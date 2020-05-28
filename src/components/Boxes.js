import React from "react";

const Boxes = ({
  qtUser,
  ageTotal,
  apiResults,
  averageAge,
  totalGenderMale,
  totalGenderFemale
}) => {
  return (
    <div className="boxes-container">
      <div className="boxes-card">
        {qtUser ? (
          <h1>{qtUser} usuário(s) encontrado(s)</h1>
        ) : (
          <h1>Nenhum usuário filtrado</h1>
        )}
        {apiResults && (
          <ul>
            {apiResults.map((item) => {
              // console.log(apiResults.results);
              return (
                <li key={item.email}>
                  <div>
                    <img src={item.picture.thumbnail} alt="User img" />
                    <p>
                      {item.name.first} {item.name.last}, {item.dob.age} anos
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="boxes-card">
        {qtUser ? (
          <>
            <h1>Estatísticas</h1>
            <p>Sexo masculino: {totalGenderMale()}</p>
            <p>Sexo feminino: {totalGenderFemale()}</p>
            <p>Soma das idades: {ageTotal()}</p>
            <p>Média das idades: {averageAge()}</p>
          </>
        ) : (
          <h1>Nada a ser exibido</h1>
        )}
      </div>
    </div>
  );
};

export default Boxes;
