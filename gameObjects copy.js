AFRAME.registerComponent("walls", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 60;
  
      for (var i = 0; i < 10; i++) {
        var wall1 = document.createElement("a-entity");
        var wall2 = document.createElement("a-entity");
        var wall3 = document.createElement("a-entity");
        var wall4 = document.createElement("a-entity");
  
  
        //set x, y and z position
        posX = posX + 5;
        posY = 2;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2, y: 2, z: 2 };
  
        //set the id
        wall1.setAttribute("id", "wall1" + i);
        wall2.setAttribute("id", "wall2" + i);
        wall3.setAttribute("id", "wall3" + i);
        wall4.setAttribute("id", "wall4" + i);
  
        //set the position
        wall1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        wall2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
        wall3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
        wall4.setAttribute("position", { x: 50, y: 2.5, z: posZ });
  
        //set the scale
        wall1.setAttribute("scale", scale);
        wall2.setAttribute("scale", scale);
        wall3.setAttribute("scale", scale);
        wall4.setAttribute("scale", scale);
  
        //set the model
        wall1.setAttribute(
          "gltf-model",
          "./models/brick_wall/scene.gltf"
        );
  
        wall2.setAttribute(
          "gltf-model",
          "./models/brick_wall/scene.gltf"
        );
  
        wall3.setAttribute(
          "gltf-model",
          "./models/brick_wall/scene.gltf"
        );
  
        wall4.setAttribute(
          "gltf-model",
          "./models/brick_wall/scene.gltf"
        );
  
        //set the rotation
        //set the physics body
        wall1.setAttribute("static-body", {});
        wall2.setAttribute("static-body", {});
        wall3.setAttribute("static-body", {});
        wall4.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(wall1);
        sceneEl.appendChild(wall2);
        sceneEl.appendChild(wall3);
        sceneEl.appendChild(wall4);
  
      }
    },
  });