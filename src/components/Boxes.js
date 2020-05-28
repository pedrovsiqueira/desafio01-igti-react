import React from "react";

const Boxes = ({
  qtUser,
  usersTotalMales,
  usersTotalFemales,
  usersTotalAge,
  usersAverageAge,
  apiResults,
}) => {
  // console.log(apiResults.results);
  return (
    <div className="boxes-container">
      <div className="boxes-card">
        {qtUser ? (
          <h1>{qtUser} usuário(s) encontrado(s)</h1>
        ) : (
          <h1>Nenhum usuário filtrado</h1>
          )}
        {apiResults.results && 
          <ul>
          {apiResults.results.map((item) => {
            console.log(apiResults.results);
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
        }
      </div>
      <div className="boxes-card">
        {qtUser ? (
          <>
            <h1>Estatísticas</h1>
            <p>Sexo masculino: {usersTotalMales}</p>
            <p>Sexo feminino: {usersTotalFemales}</p>
            <p>Soma das idades: {usersTotalAge}</p>
            <p>Média das idades: {usersAverageAge}</p>
          </>
        ) : (
          <h1>Nada a ser exibido</h1>
        )}
      </div>
    </div>
  );
};

export default Boxes;
